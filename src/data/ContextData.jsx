import React, { createContext, useState } from 'react';

export const context = createContext();

const ContextData = (props) => {
	const [data, setData] = useState([
		{
			id: 1,
			moduleNo: 0,
			tabNo: 0,
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
			moduleNo: 1,
			moduleName: 'Module One',
			tabNo: 1,
			tabName: 'Tab 1',
			titleText: 'Morbi arcu libero',
			imgPath: '/assets/images/img-1.1.png',
			descriptionText:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem consequatur sapiente harum enim. Laboriosam commodi, quibusdam architecto labore laborum inventore earum nam quia sit dolorum alias sint officiis amet, hic deleniti, omnis fugit eveniet ipsam. Reiciendis ad non voluptates omnis itaque officia, autem praesentium ut molestiae consectetur, officiis quis voluptatibus? Incidunt, mollitia iste. Nemo quis sequi illum fugiat! Soluta repudiandae et sapiente dicta pariatur molestiae dolores reiciendis earum amet quam impedit itaque asperiores ratione, quos delectus quisquam architecto! Autem minima aliquam reiciendis vitae reprehenderit quibusdam possimus dolore ullam adipisci doloribus. Nisi animi perferendis provident repellendus minus unde consectetur est ab!',
		},
		{
			id: 4,
			moduleNo: 1,
			moduleName: 'Module One',
			tabNo: 2,
			tabName: 'Tab 2',
			titleText: 'Ut hendrerit est toth',
			imgPath: '/assets/images/img-1.2.png',
			descriptionText:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem consequatur sapiente harum enim. Laboriosam commodi, quibusdam architecto labore laborum inventore earum nam quia sit dolorum alias sint officiis amet, hic deleniti, omnis fugit eveniet ipsam. Reiciendis ad non voluptates omnis itaque officia, autem praesentium ut molestiae consectetur, officiis quis voluptatibus? Incidunt, mollitia iste. Nemo quis sequi illum fugiat! Soluta repudiandae et sapiente dicta pariatur molestiae dolores reiciendis earum amet quam impedit itaque asperiores ratione, quos delectus quisquam architecto! Autem minima aliquam reiciendis vitae reprehenderit quibusdam possimus dolore ullam adipisci doloribus. Nisi animi perferendis provident repellendus minus unde consectetur est ab!',
		},
		{
			id: 5,
			moduleNo: 1,
			moduleName: 'Module One',
			tabNo: 3,
			tabName: 'Tab 3',
			titleText: 'Ut hendrerit est tovegh',
			imgPath: '/assets/images/img-1.3.png',
			descriptionText:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem consequatur sapiente harum enim. Laboriosam commodi, quibusdam architecto labore laborum inventore earum nam quia sit dolorum alias sint officiis amet, hic deleniti, omnis fugit eveniet ipsam. Reiciendis ad non voluptates omnis itaque officia, autem praesentium ut molestiae consectetur, officiis quis voluptatibus? Incidunt, mollitia iste. Nemo quis sequi illum fugiat! Soluta repudiandae et sapiente dicta pariatur molestiae dolores reiciendis earum amet quam impedit itaque asperiores ratione, quos delectus quisquam architecto! Autem minima aliquam reiciendis vitae reprehenderit quibusdam possimus dolore ullam adipisci doloribus. Nisi animi perferendis provident repellendus minus unde consectetur est ab!',
		},
		{
			id: 6,
			moduleNo: 2,
			moduleName: 'Module Two',
			tabNo: 1,
			tabName: 'Tab 1',
			titleText: 'Morbi arcu libero',
			imgPath: '/assets/images/img-2.1.png',
			descriptionText:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem consequatur sapiente harum enim. Laboriosam commodi, quibusdam architecto labore laborum inventore earum nam quia sit dolorum alias sint officiis amet, hic deleniti, omnis fugit eveniet ipsam. Reiciendis ad non voluptates omnis itaque officia, autem praesentium ut molestiae consectetur, officiis quis voluptatibus? Incidunt, mollitia iste. Nemo quis sequi illum fugiat! Soluta repudiandae et sapiente dicta pariatur molestiae dolores reiciendis earum amet quam impedit itaque asperiores ratione, quos delectus quisquam architecto! Autem minima aliquam reiciendis vitae reprehenderit quibusdam possimus dolore ullam adipisci doloribus. Nisi animi perferendis provident repellendus minus unde consectetur est ab!',
		},
		{
			id: 7,
			moduleNo: 2,
			moduleName: 'Module Two',
			tabNo: 2,
			tabName: 'Tab 2',
			titleText: 'Ut hendrerit est toth',
			imgPath: '/assets/images/img-2.2.png',
			descriptionText:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem consequatur sapiente harum enim. Laboriosam commodi, quibusdam architecto labore laborum inventore earum nam quia sit dolorum alias sint officiis amet, hic deleniti, omnis fugit eveniet ipsam. Reiciendis ad non voluptates omnis itaque officia, autem praesentium ut molestiae consectetur, officiis quis voluptatibus? Incidunt, mollitia iste. Nemo quis sequi illum fugiat! Soluta repudiandae et sapiente dicta pariatur molestiae dolores reiciendis earum amet quam impedit itaque asperiores ratione, quos delectus quisquam architecto! Autem minima aliquam reiciendis vitae reprehenderit quibusdam possimus dolore ullam adipisci doloribus. Nisi animi perferendis provident repellendus minus unde consectetur est ab!',
		},
		{
			id: 8,
			moduleNo: 2,
			moduleName: 'Module Two',
			tabNo: 3,
			tabName: 'Tab 3',
			titleText: 'Ut hendrerit est tovegh',
			imgPath: '/assets/images/img-2.3.png',
			descriptionText:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem consequatur sapiente harum enim. Laboriosam commodi, quibusdam architecto labore laborum inventore earum nam quia sit dolorum alias sint officiis amet, hic deleniti, omnis fugit eveniet ipsam. Reiciendis ad non voluptates omnis itaque officia, autem praesentium ut molestiae consectetur, officiis quis voluptatibus? Incidunt, mollitia iste. Nemo quis sequi illum fugiat! Soluta repudiandae et sapiente dicta pariatur molestiae dolores reiciendis earum amet quam impedit itaque asperiores ratione, quos delectus quisquam architecto! Autem minima aliquam reiciendis vitae reprehenderit quibusdam possimus dolore ullam adipisci doloribus. Nisi animi perferendis provident repellendus minus unde consectetur est ab!',
		},
		{
			id: 9,
			moduleNo: 3,
			moduleName: 'Module Three',
			tabNo: 1,
			tabName: 'Tab 1',
			titleText: 'Morbi arcu libero',
			imgPath: '/assets/images/img-3.1.png',
			descriptionText:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem consequatur sapiente harum enim. Laboriosam commodi, quibusdam architecto labore laborum inventore earum nam quia sit dolorum alias sint officiis amet, hic deleniti, omnis fugit eveniet ipsam. Reiciendis ad non voluptates omnis itaque officia, autem praesentium ut molestiae consectetur, officiis quis voluptatibus? Incidunt, mollitia iste. Nemo quis sequi illum fugiat! Soluta repudiandae et sapiente dicta pariatur molestiae dolores reiciendis earum amet quam impedit itaque asperiores ratione, quos delectus quisquam architecto! Autem minima aliquam reiciendis vitae reprehenderit quibusdam possimus dolore ullam adipisci doloribus. Nisi animi perferendis provident repellendus minus unde consectetur est ab!',
		},
		{
			id: 10,
			moduleNo: 3,
			moduleName: 'Module Three',
			tabNo: 2,
			tabName: 'Tab 2',
			titleText: 'Ut hendrerit est toth',
			imgPath: '/assets/images/img-3.2.png',
			descriptionText:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem consequatur sapiente harum enim. Laboriosam commodi, quibusdam architecto labore laborum inventore earum nam quia sit dolorum alias sint officiis amet, hic deleniti, omnis fugit eveniet ipsam. Reiciendis ad non voluptates omnis itaque officia, autem praesentium ut molestiae consectetur, officiis quis voluptatibus? Incidunt, mollitia iste. Nemo quis sequi illum fugiat! Soluta repudiandae et sapiente dicta pariatur molestiae dolores reiciendis earum amet quam impedit itaque asperiores ratione, quos delectus quisquam architecto! Autem minima aliquam reiciendis vitae reprehenderit quibusdam possimus dolore ullam adipisci doloribus. Nisi animi perferendis provident repellendus minus unde consectetur est ab!',
		},
		{
			id: 11,
			moduleNo: 3,
			moduleName: 'Module Three',
			tabNo: 3,
			tabName: 'Tab 3',
			titleText: 'Ut hendrerit est tovegh',
			imgPath: '/assets/images/img-3.3.png',
			descriptionText:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem consequatur sapiente harum enim. Laboriosam commodi, quibusdam architecto labore laborum inventore earum nam quia sit dolorum alias sint officiis amet, hic deleniti, omnis fugit eveniet ipsam. Reiciendis ad non voluptates omnis itaque officia, autem praesentium ut molestiae consectetur, officiis quis voluptatibus? Incidunt, mollitia iste. Nemo quis sequi illum fugiat! Soluta repudiandae et sapiente dicta pariatur molestiae dolores reiciendis earum amet quam impedit itaque asperiores ratione, quos delectus quisquam architecto! Autem minima aliquam reiciendis vitae reprehenderit quibusdam possimus dolore ullam adipisci doloribus. Nisi animi perferendis provident repellendus minus unde consectetur est ab!',
		},
		{
			id: 12,
			moduleNo: 4,
			moduleName: 'Module Four',
			tabNo: 1,
			tabName: 'Tab 1',
			titleText: 'Morbi arcu libero',
			imgPath: '/assets/images/img-4.1.png',
			descriptionText:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem consequatur sapiente harum enim. Laboriosam commodi, quibusdam architecto labore laborum inventore earum nam quia sit dolorum alias sint officiis amet, hic deleniti, omnis fugit eveniet ipsam. Reiciendis ad non voluptates omnis itaque officia, autem praesentium ut molestiae consectetur, officiis quis voluptatibus? Incidunt, mollitia iste. Nemo quis sequi illum fugiat! Soluta repudiandae et sapiente dicta pariatur molestiae dolores reiciendis earum amet quam impedit itaque asperiores ratione, quos delectus quisquam architecto! Autem minima aliquam reiciendis vitae reprehenderit quibusdam possimus dolore ullam adipisci doloribus. Nisi animi perferendis provident repellendus minus unde consectetur est ab!',
		},
		{
			id: 13,
			moduleNo: 4,
			moduleName: 'Module Four',
			tabNo: 2,
			tabName: 'Tab 2',
			titleText: 'Ut hendrerit est toth',
			imgPath: '/assets/images/img-4.2.png',
			descriptionText:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem consequatur sapiente harum enim. Laboriosam commodi, quibusdam architecto labore laborum inventore earum nam quia sit dolorum alias sint officiis amet, hic deleniti, omnis fugit eveniet ipsam. Reiciendis ad non voluptates omnis itaque officia, autem praesentium ut molestiae consectetur, officiis quis voluptatibus? Incidunt, mollitia iste. Nemo quis sequi illum fugiat! Soluta repudiandae et sapiente dicta pariatur molestiae dolores reiciendis earum amet quam impedit itaque asperiores ratione, quos delectus quisquam architecto! Autem minima aliquam reiciendis vitae reprehenderit quibusdam possimus dolore ullam adipisci doloribus. Nisi animi perferendis provident repellendus minus unde consectetur est ab!',
		},
		{
			id: 14,
			moduleNo: 4,
			moduleName: 'Module Four',
			tabNo: 3,
			tabName: 'Tab 3',
			titleText: 'Ut hendrerit est tovegh',
			imgPath: '/assets/images/img-4.3.png',
			descriptionText:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem consequatur sapiente harum enim. Laboriosam commodi, quibusdam architecto labore laborum inventore earum nam quia sit dolorum alias sint officiis amet, hic deleniti, omnis fugit eveniet ipsam. Reiciendis ad non voluptates omnis itaque officia, autem praesentium ut molestiae consectetur, officiis quis voluptatibus? Incidunt, mollitia iste. Nemo quis sequi illum fugiat! Soluta repudiandae et sapiente dicta pariatur molestiae dolores reiciendis earum amet quam impedit itaque asperiores ratione, quos delectus quisquam architecto! Autem minima aliquam reiciendis vitae reprehenderit quibusdam possimus dolore ullam adipisci doloribus. Nisi animi perferendis provident repellendus minus unde consectetur est ab!',
		},
		{
			id: 15,
			moduleNo: 5,
			moduleName: 'Module Five',
			tabNo: 1,
			tabName: 'Tab 1',
			titleText: 'Morbi arcu libero',
			imgPath: '/assets/images/img-5.1.png',
			descriptionText:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem consequatur sapiente harum enim. Laboriosam commodi, quibusdam architecto labore laborum inventore earum nam quia sit dolorum alias sint officiis amet, hic deleniti, omnis fugit eveniet ipsam. Reiciendis ad non voluptates omnis itaque officia, autem praesentium ut molestiae consectetur, officiis quis voluptatibus? Incidunt, mollitia iste. Nemo quis sequi illum fugiat! Soluta repudiandae et sapiente dicta pariatur molestiae dolores reiciendis earum amet quam impedit itaque asperiores ratione, quos delectus quisquam architecto! Autem minima aliquam reiciendis vitae reprehenderit quibusdam possimus dolore ullam adipisci doloribus. Nisi animi perferendis provident repellendus minus unde consectetur est ab!',
		},
		{
			id: 16,
			moduleNo: 5,
			moduleName: 'Module Five',
			tabNo: 2,
			tabName: 'Tab 2',
			titleText: 'Ut hendrerit est toth',
			imgPath: '/assets/images/img-5.2.png',
			descriptionText:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem consequatur sapiente harum enim. Laboriosam commodi, quibusdam architecto labore laborum inventore earum nam quia sit dolorum alias sint officiis amet, hic deleniti, omnis fugit eveniet ipsam. Reiciendis ad non voluptates omnis itaque officia, autem praesentium ut molestiae consectetur, officiis quis voluptatibus? Incidunt, mollitia iste. Nemo quis sequi illum fugiat! Soluta repudiandae et sapiente dicta pariatur molestiae dolores reiciendis earum amet quam impedit itaque asperiores ratione, quos delectus quisquam architecto! Autem minima aliquam reiciendis vitae reprehenderit quibusdam possimus dolore ullam adipisci doloribus. Nisi animi perferendis provident repellendus minus unde consectetur est ab!',
		},
		{
			id: 17,
			moduleNo: 5,
			moduleName: 'Module Five',
			tabNo: 3,
			tabName: 'Tab 3',
			titleText: 'Ut hendrerit est tovegh',
			imgPath: '/assets/images/img-5.3.png',
			descriptionText:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem consequatur sapiente harum enim. Laboriosam commodi, quibusdam architecto labore laborum inventore earum nam quia sit dolorum alias sint officiis amet, hic deleniti, omnis fugit eveniet ipsam. Reiciendis ad non voluptates omnis itaque officia, autem praesentium ut molestiae consectetur, officiis quis voluptatibus? Incidunt, mollitia iste. Nemo quis sequi illum fugiat! Soluta repudiandae et sapiente dicta pariatur molestiae dolores reiciendis earum amet quam impedit itaque asperiores ratione, quos delectus quisquam architecto! Autem minima aliquam reiciendis vitae reprehenderit quibusdam possimus dolore ullam adipisci doloribus. Nisi animi perferendis provident repellendus minus unde consectetur est ab!',
		},
	]);
	return (
		<>
			<context.Provider value={[data, setData]}>{props.children}</context.Provider>
		</>
	);
};

export default ContextData;
