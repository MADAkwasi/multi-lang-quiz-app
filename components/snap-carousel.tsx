import { Dispatch, ReactNode, RefObject, SetStateAction } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from "react-native";

interface Props {
  children: ReactNode;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  ref: RefObject<ScrollView | null>;
}

export default function SnapCarouselView({
  children,
  setCurrentStep,
  ref,
}: Props) {
  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const pageIndex = Math.round(
      e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width
    );
    setCurrentStep(pageIndex);
  };

  return (
    <ScrollView
      ref={ref}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onMomentumScrollEnd={handleScroll}
      scrollEventThrottle={16}
    >
      {children}
    </ScrollView>
  );
}
