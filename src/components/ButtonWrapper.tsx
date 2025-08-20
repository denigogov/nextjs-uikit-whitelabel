import Link from "next/link";
import Button from "@/whitelabel/src/atoms/button/A-Button"; // Adjust path as needed
import type { ButtonTypes } from "@/whitelabel/src/atoms/button/a-button.types";
interface ButtonWrapperProps extends ButtonTypes {
  href?: string;
}

const ButtonWrapper: React.FC<ButtonWrapperProps> = ({
  href,
  ...buttonProps
}) => {
  return (
    <div>
      <Link href={href ?? "#"} passHref>
        <Button {...buttonProps} />
      </Link>
    </div>
  );
};

export default ButtonWrapper;
