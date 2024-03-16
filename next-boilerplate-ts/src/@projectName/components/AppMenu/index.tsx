import React from 'react';
import { Dropdown } from 'antd';

const options = ['View More', 'Update Data', 'Clear Data'];
const AppMenu = () => {
	const items = options.map((option, index) => {
		return { key: index, label: <a href="#/">{option}</a> };
	});

	return (
		<Dropdown menu={{ items }} trigger={['click']}>
			<a className="ant-dropdown-link cr-dropdown-link" onClick={e => e.preventDefault()}></a>
		</Dropdown>
	);
};

export default AppMenu;
