import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
  theme?: "filled" | "outlined";
  text: string;
  className?: string;
}

const BaseButton = styled.button`
  ${tw`
    pl-5
    pr-5
    pt-3
    pb-3
    outline-none
    rounded-md
    text-white
    text-xs
    font-semibold
    border-transparent
    border-2
    border-solid
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    m-1
    
  `};
  ${tw`cursor-pointer`} /* Apply the cursor-pointer utility class */
`;

const OutlinedButton = styled(BaseButton)`
  ${tw`
    bg-red-500
    hover:bg-transparent
    hover:text-red-500
    hover:border-red-500
  `};
  &:hover {
    background-color: transparent;
    color: red;
    border-color: red;
  }
`;

const FilledButton = styled(BaseButton)`
  ${tw`
    border-red-500
    text-red-500
    bg-transparent
  `};

  /* Move the hover selector inside of the FilledButton class */
  &:hover {
    background-color: #F44336;
    color: white;
    border-color: transparent;
  }
`;

export function Button(props: IButtonProps) {
  const { theme, text, className } = props;

  if (theme === "filled")
    return <FilledButton className={className}>{text}</FilledButton>;
  else return <OutlinedButton className={className}>{text}</OutlinedButton>;}