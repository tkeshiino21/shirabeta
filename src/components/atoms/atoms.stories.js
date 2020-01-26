import React from 'react';
import { Button } from 'components/atoms/Button';
import { Card, Paper } from 'components/atoms/Card';
import { Box } from 'components/atoms/Layout';
import { Text } from 'components/atoms/Typography';
import { BackDrop } from 'components/atoms/Utils';

export default { title: 'ATOMS' };

export const Buttons = () => (
  <>
    <Button className="outlined">デフォルト</Button>
    <Button className="primary">デフォルト</Button>
    <Button className="secondary">デフォルト</Button>
  </>
);

export const Cards = () => (
  <>
    <Card>デフォルト</Card>
    <Paper>デフォルト</Paper>
  </>
);

export const Texts = () => (
  <Box className="vertical">
    <Text className="h1">ヘディング1</Text>
    <Text className="h2">ヘディング2</Text>
    <Text className="h3">ヘディング3</Text>
    <Text className="h4">ヘディング4</Text>
    <Text className="h5">ヘディング5</Text>
    <Text className="h6">ヘディング6</Text>
    <Text className="subtitle1">サブタイトル1</Text>
    <Text className="subtitle2">サブタイトル2</Text>
    <Text className="body1">ボディ1</Text>
    <Text className="body2">ボディ2</Text>
    <Text className="caption">キャプション</Text>
    <Text className="button">ボタン</Text>
    <Text className="outline">アウトライン</Text>
  </Box>
);

export const BackDrops = () => (
  <>
    <BackDrop>デフォルト</BackDrop>
  </>
);
