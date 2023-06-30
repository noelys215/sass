import Link from 'next/link';
import Logo from 'src/core/components/Logo';

export default function Navbar() {
	return (
		<div className="nav-container border-b-2 border-black">
			<Link href={'/'}>
				<Logo />
			</Link>
			<div className="nav-menu">
				<Link className="nav-link white" href={'/login'}>
					<div>Login</div>
				</Link>
				<Link className="nav-link black" href={'/pricing'}>
					<div>Pricing</div>
				</Link>
			</div>
		</div>
	);
}
