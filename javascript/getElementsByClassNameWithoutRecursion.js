function getElementsByClassName(element, classNames) {
  const result = [];
  const classes = classNames.trim().split(/\s+/);
  const stack = [...element.children];

  while (stack.length) {
    const node = stack.pop();

    if (classes.every(cls => node.classList.contains(cls))) {
      result.push(node);
    }

    stack.push(...node.children);
  }

  return result;
}
