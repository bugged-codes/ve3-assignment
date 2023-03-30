import React, { createContext, useState } from 'react';

export const context = createContext();

const ContextData = (props) => {
	const [data, setData] = useState([
		{
			id: 1,
			moduleId: 0,
			tabId: 0,
			imgPath: '/assets/images/img-1.png',
		},
		{
			id: 2,
			moduleId: 0,
			tabId: 0,
			imgPath: '/assets/images/img-2.png',
		},
		{
			id: 3,
			moduleId: 0,
			tabId: 0,
			imgPath: '/assets/images/img-2.png',
			descriptionText:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem consequatur sapiente harum enim. Laboriosam commodi, quibusdam architecto labore laborum inventore earum nam quia sit dolorum alias sint officiis amet, hic deleniti, omnis fugit eveniet ipsam. Reiciendis ad non voluptates omnis itaque officia, autem praesentium ut molestiae consectetur, officiis quis voluptatibus? Incidunt, mollitia iste. Nemo quis sequi illum fugiat! Soluta repudiandae et sapiente dicta pariatur molestiae dolores reiciendis earum amet quam impedit itaque asperiores ratione, quos delectus quisquam architecto! Autem minima aliquam reiciendis vitae reprehenderit quibusdam possimus dolore ullam adipisci doloribus. Nisi animi perferendis provident repellendus minus unde consectetur est ab!',
			title: 'title-1',
		},
	]);
	return (
		<>
			<context.Provider value={[data, setData]}>{props.children}</context.Provider>
		</>
	);
};

export default ContextData;
