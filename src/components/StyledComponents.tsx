import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-horizontal: 20;
  align-items: center;
  background-color: #1565c0;
  justify-content: center;
`;

export const Card = styled.View`
  background-color: white;
  border-radius: 6px;
  padding-horizontal: 16;
  padding-vertical: 8;
  width: 100%;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18;
  margin-vertical: 20px;
`;

export const Input = styled.TextInput`
  align-self: flex-start;
`;
