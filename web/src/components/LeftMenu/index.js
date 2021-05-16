import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { LogOut } from 'react-feather';
import { Container, LinkItem } from './styles';

const LeftBar = () => {
  const history = useHistory();
  const { signOut, user } = useAuth();

  return (
    <Container>
        <div>
            <LinkItem onClick={() => history.push('/dashboard/moves')}>Movimentos</LinkItem>
            <LinkItem onClick={() => history.push('/dashboard/activities')}>Atividades</LinkItem>
        </div>

        <LinkItem onClick={() => signOut()} style={{ backgroundColor: '#111', color: "#999" }}>
          Sair 
          <LogOut size={20} color="#999" />
        </LinkItem>
    </Container>
  );
}

export default LeftBar;