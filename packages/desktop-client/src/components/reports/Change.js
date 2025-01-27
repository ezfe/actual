import React from 'react';
import { styles } from 'loot-design/src/style';
import { integerToCurrency } from 'loot-core/src/shared/util';
import { Block } from 'loot-design/src/components/common';
import { colors } from 'loot-design/src/style';

function Change({ amount, style }) {
  return (
    <Block
      style={[styles.smallText, { color: amount < 0 ? colors.r5 : colors.g5 }]}
    >
      {amount >= 0 ? '+' : ''}
      {integerToCurrency(amount)}
    </Block>
  );
}

export default Change;
