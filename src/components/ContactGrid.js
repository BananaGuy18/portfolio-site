import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import ContactItem from './ContactItem'
import { CONTACT_INFO } from '../constants'

const ContactGrid = () => {
  return (
    <SimpleGrid columns={{ base: "1", md: "4" }}>
        {CONTACT_INFO.map((item, index) => (
            <ContactItem key={index} item={item} />
        ))}
    </SimpleGrid>
  )
}

export default ContactGrid