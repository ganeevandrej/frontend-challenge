export const getId = (target: HTMLElement): string | null => {
  if (target instanceof HTMLElement) {
    if (target.tagName !== "path") return null;

    return target.closest("svg")?.dataset.id || null;
  }

  return null;
};
