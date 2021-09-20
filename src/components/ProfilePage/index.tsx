import React from 'react'

import { Feed } from '../Feed'

import { 
  Container,
  Banner, 
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
  } from './styles'

export function ProfilePage() {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Douglas Munaro</h1>
        <h2>@douglass_fm</h2>
        <p>
          Mais um louco do bando
        </p>
        <ul>
          <li>
            <LocationIcon />
            Mato Grosso, Brasil
          </li>
          <li>
            <CakeIcon />
            Ingressou em outubro de 2018
          </li>
        </ul>
      
        <Followage>
          <span>
            <strong>325</strong> Seguindo
          </span>
          <span>
            <strong>393</strong> Seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />

    </Container>
  )
}