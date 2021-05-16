import React from 'react'
import { IconDots } from 'tabler-icons'

import { Container, Text } from './styles'

const ListMoveItem = ({ name, onAdd }) => {
  return (
    <Container>
        <IconDots color="#999" style={{ marginRight: 10 }} />
        <Text onClick={onAdd}>{name}</Text>
    </Container>
  );
}

export default ListMoveItem;