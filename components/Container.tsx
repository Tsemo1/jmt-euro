import { cn } from 'cn';
import React from 'react'

const Container = ({
    children,
    className,
}:{
    children:React.ReactNode;
    className?: String
}) => {
  return (
    <div className={cn("max-w-screen-xl mx-auto px-4",
    className)}>
        {children}
    </div>
  );
}

export default Container