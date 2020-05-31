import { h } from 'preact';

export default function NestedList({ items }) {
	return (<ul>
		{ items.map(item => {
			const hasChildren = item.children && item.children.length;

			return (<li key={item.name}>
				{ item.name }
				{ hasChildren ? <NestedList items={item.children} /> : null }
			</li>);
		}) }
	</ul>);
}
