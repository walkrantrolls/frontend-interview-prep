function getElementsByClassName(element, classNames) {
  const result = [];
  const classes = classNames.trim().split(/\s+/);

  function traverse(node) {
    for (const child of node.children) {

      if (classes.every(className => child.classList.contains(className))) {
        result.push(child);
      }

      traverse(child);
    }
  }

  traverse(element);

  return result;
}
