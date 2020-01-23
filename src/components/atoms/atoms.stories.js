import React from 'react';
import { Button, LinkButton } from 'components/atoms/Button';
import { Card, Paper } from 'components/atoms/Card';
import {
  Container,
  Box,
  Spacing,
  Divider,
  Image,
  Block,
} from 'components/atoms/Layout';
import { GlobalStyle } from 'components/atoms/GlobalStyle';
import {
  Input,
  Label,
  Textarea,
  Select,
  SelectWrapper,
  Option,
} from 'components/atoms/Inputs';
import { Loader, Snackbar } from 'components/atoms/Feedback';
import {
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  StyledTableRow,
  StyledTableCell,
} from 'components/atoms/Table';
import { Text, Strong } from 'components/atoms/Typography';
import { BackDrop } from 'components/atoms/Utils';

// important
import { theme } from 'components/atoms/theme';
import { media } from 'components/atoms/media';

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
