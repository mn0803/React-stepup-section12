import { Button } from "@chakra-ui/react";
import { memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
};

export const PrimaryButton = memo((props: Props) => {
  const { children, disabled = false, loading = false, onClick } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
      isLoading={loading}
      disabled={disabled || loading}
    >
      {children}
    </Button>
  );
});
