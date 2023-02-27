import { TriangleDownIcon } from '@chakra-ui/icons'
import { Checkbox, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react'

function TaskItem( { id,title,complete,onToggle, onDelete} ) {

    return (
        <Flex className="task-list-item" >
        <Checkbox isChecked={complete} w="full" onChange={()=>onToggle(id)}>
          <Text as={complete?'s':'p'}>{ title }</Text>
          </Checkbox>
        <Menu>
  <MenuButton 
    as={IconButton}
    aria-label='Options'
    icon={<TriangleDownIcon />}
    variant='ghost'
  />
  <MenuList>
    
    <MenuItem onClick={() => onDelete(id)}> Delete</MenuItem>
  </MenuList>
</Menu>
        </Flex>
    )
}

export default TaskItem