import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Background = styled(SafeAreaView)`
  flex: 1;
  background: ${({ theme }) => theme.shadesOfGray.i1000};
`;
