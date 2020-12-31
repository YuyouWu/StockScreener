import { useState } from 'react';
import { Menu, Segment } from 'semantic-ui-react';

export default function NavBar() {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <div>
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={() => setActiveItem('home')}
          />
          <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={() => setActiveItem('about')}
          />
        </Menu>
      </Segment>
    </div>
  )
}
