import { useTheme } from 'styled-components';

import { MarvelIcon, MenuIcon, SearchIcon } from 'components/CustomIcons';

import * as S from './styles';

export function Main() {
  const { colors, gradients } = useTheme();

  return (
    <>
      <S.Header>
        <MenuIcon
          size={24}
          style={{ cursor: 'pointer' }}
          wrapperProps={{
            role: 'img',
            'aria-label': 'Ícone para acessar o menu',
          }}
        />

        <MarvelIcon
          width={71}
          height={26}
          start={{ color: gradients.red.from, offset: 25 }}
          end={{ color: gradients.red.to, offset: 75 }}
          wrapperProps={{ role: 'img', 'aria-label': 'Logo escrito marvel' }}
        />

        <SearchIcon
          size={20}
          style={{ cursor: 'pointer' }}
          stroke={colors.primaryDark}
          fill="none"
          wrapperProps={{
            role: 'img',
            'aria-label': 'Ícone de lupa para pesquisar',
          }}
        />
      </S.Header>
    </>
  );
}
