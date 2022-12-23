const getHeight = ref => (ref && ref.parentNode && ref.parentNode.style.height ? '100%' : 340);

export default getHeight;
