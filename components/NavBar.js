import { Menu, Segment } from 'semantic-ui-react';
import { useRouter } from 'next/router'

export default function NavBar() {
    const router = useRouter();

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
                        active={router.route === '/'}
                    />
                    <Menu.Item
                        name='about'
                        href="/about"
                        active={router.route === '/about'}
                    />
                </Menu>
            </Segment>
        </div>
    )
}
