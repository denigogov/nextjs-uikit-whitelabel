import ButtonWrapper from "@/components/ButtonWrapper";
import Button from "@/whitelabel/src/atoms/button/A-Button";
import Copy from "@/whitelabel/src/atoms/copy/Copy";
import Headline from "@/whitelabel/src/atoms/headline/Headline";

const componentMapper: Record<string, React.ComponentType<any>> = {
  "atom.a-button": ButtonWrapper,
  "atom.headline": Headline,
  "atom.copy": Copy,
};

export default componentMapper;
