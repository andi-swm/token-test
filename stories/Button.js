import './button.scss';

export const createButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  onClick,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  const mode = primary ? 'example__btn--primary' : 'example__btn--secondary';
  btn.className = ['example__btn', `example__btn--${size}`, mode].join(' ');

  btn.style.backgroundColor = backgroundColor;

  return btn;
};
