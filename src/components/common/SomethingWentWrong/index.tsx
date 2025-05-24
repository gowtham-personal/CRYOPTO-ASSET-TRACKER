import { Text } from '@/components/bricks/Text';

export const SomethingWentWrong = () => {
  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-[400px] text-center">
      <Text className="mb-4" text="Something went wrong" weight="semibold" />
      <Text
        className="mb-4"
        text="We're sorry, an error occurred while rendering this page."
        weight="medium"
      />
    </div>
  );
};
