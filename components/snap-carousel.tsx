import { Dispatch, ReactNode, RefObject, SetStateAction } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  ScrollViewProps,
  StyleProp,
} from "react-native";

interface Props {
  children: ReactNode;
  setCurrentStep?: Dispatch<SetStateAction<number>>;
  ref: RefObject<ScrollView | null>;
  isSwipeable?: boolean;
  styles?: StyleProp<ScrollViewProps>;
}

export default function SnapCarouselView({
  children,
  setCurrentStep,
  ref,
  isSwipeable = true,
  styles,
}: Props) {
  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const pageIndex = Math.round(
      e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width
    );

    if (setCurrentStep) setCurrentStep(pageIndex);
  };

  return (
    <ScrollView
      ref={ref}
      horizontal
      pagingEnabled
      scrollEnabled={isSwipeable}
      showsHorizontalScrollIndicator={false}
      onMomentumScrollEnd={isSwipeable ? handleScroll : undefined}
      scrollEventThrottle={16}
      contentContainerStyle={styles}
    >
      {children}
    </ScrollView>
  );
}
