import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Background = styled(SafeAreaView)`
  flex: 1;
  background: ${({ theme }) => theme.shadesOfGray.i1000};
`;
