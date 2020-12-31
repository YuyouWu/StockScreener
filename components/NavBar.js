import { Menu, Segment } from 'semantic-ui-react';

export default function NavBar(props) {

    return (
        <div>
            <Segment
                inverted
                style={{
                    borderRadius: 0
                }}
            >
                <Menu inverted pointing secondary>
                    <Menu.Item
                        name='home'
                        href="/"
                        active={props.page === 'home'}
                    />
                    <Menu.Item
                        name='about'
                        href="/about"
                        active={props.page === 'about'}
                    />
                </Menu>
            </Segment>
        </div>
    )
}
