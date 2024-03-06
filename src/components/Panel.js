import classNames from 'classnames';

function Panel({children, ...rest}) {
  const finalClasses = classNames(
    'border rounded p-3 shadow bg-white w-full',
    rest.className
  );

  return(
    <div {...rest} className={finalClasses}>{children}</div>
  );
}

export default Panel;