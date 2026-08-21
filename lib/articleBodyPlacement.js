function isImageBlock(block) {
  return block?.type === "image";
}

function getPlacementIndexes(blocks, imageCount) {
  const preferredIndexes = blocks
    .map((block, index) => ({ block, index }))
    .filter(({ block }) => !isImageBlock(block) && block?.type !== "heading")
    .map(({ index }) => index);
  const fallbackIndexes = blocks
    .map((block, index) => ({ block, index }))
    .filter(({ block }) => !isImageBlock(block))
    .map(({ index }) => index);
  const candidateIndexes = preferredIndexes.length ? preferredIndexes : fallbackIndexes;
  const indexes = candidateIndexes.length > 1 ? candidateIndexes.slice(0, -1) : candidateIndexes;

  if (!indexes.length || imageCount <= 0) {
    return [];
  }

  const usedIndexes = new Set();

  return Array.from({ length: imageCount }, (_, imageIndex) => {
    const idealIndex = Math.round(((imageIndex + 1) * (indexes.length + 1)) / (imageCount + 1)) - 1;
    let placementIndex = Math.max(0, Math.min(indexes.length - 1, idealIndex));

    while (usedIndexes.has(placementIndex) && placementIndex < indexes.length - 1) {
      placementIndex += 1;
    }

    while (usedIndexes.has(placementIndex) && placementIndex > 0) {
      placementIndex -= 1;
    }

    usedIndexes.add(placementIndex);
    return indexes[placementIndex];
  });
}

export function insertImagesThroughArticleBody(body = [], imageBlocks = []) {
  const sourceBlocks = Array.isArray(body) ? [...body] : [];
  const images = Array.isArray(imageBlocks) ? imageBlocks.filter(isImageBlock) : [];

  if (!images.length) {
    return sourceBlocks;
  }

  if (!sourceBlocks.length) {
    return images;
  }

  const placementIndexes = getPlacementIndexes(sourceBlocks, images.length);

  if (!placementIndexes.length) {
    return [...sourceBlocks, ...images];
  }

  const placements = new Map();

  images.forEach((image, index) => {
    const placementIndex = placementIndexes[index] ?? placementIndexes[placementIndexes.length - 1];
    const currentImages = placements.get(placementIndex) || [];
    placements.set(placementIndex, [...currentImages, image]);
  });

  return sourceBlocks.flatMap((block, index) => [block, ...(placements.get(index) || [])]);
}

export function distributeTrailingImagesThroughArticleBody(body = []) {
  const sourceBlocks = Array.isArray(body) ? [...body] : [];
  let contentEndIndex = sourceBlocks.length;

  while (contentEndIndex > 0 && isImageBlock(sourceBlocks[contentEndIndex - 1])) {
    contentEndIndex -= 1;
  }

  const trailingImages = sourceBlocks.slice(contentEndIndex);

  if (!trailingImages.length || contentEndIndex === 0) {
    return sourceBlocks;
  }

  return insertImagesThroughArticleBody(sourceBlocks.slice(0, contentEndIndex), trailingImages);
}
