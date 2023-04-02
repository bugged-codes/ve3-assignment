import React, { createContext, useState } from 'react';

const context = createContext();

export function ContextData({ children }) {
	const [data, setData] = useState([
		{
			id: 1,
			moduleNo: 0,
			moduleName: '0',
			tabNo: 0,
			tabName: '0',
			titleText: '0',
			imgPath: '/assets/images/img-1.png',
			imgAlt: 'Women holding spectacles in her hand representing business women.',
			descriptionText: 'NONE',
		},
		{
			id: 2,
			moduleNo: 0,
			moduleName: '0',
			tabNo: 0,
			tabName: '0',
			titleText: '0',
			imgPath: '/assets/images/img-2.png',
			imgAlt: 'Background Graphics.',
			descriptionText: 'NONE',
		},
		{
			id: 3,
			moduleNo: 1,
			moduleName: 'Module One',
			tabNo: 1,
			tabName: 'Tab 1',
			titleText: 'Morbi arcu libero',
			imgPath: '/assets/images/img-1.1.png',
			imgAlt: '4 people fist bumping from 4 different directions to make a square.',
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
			imgAlt: 'Women giving presentation, pointing to pie charts.',
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
			imgAlt: 'Joe Biden and Barack Obama looking into one mobile.',
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
			imgAlt: 'two people shaking hands in front of a blue background.',
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
			imgAlt: 'a close up of a cell phone and a pen on a desk.',
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
			imgAlt: 'a man in a suit holding a tablet with a chart on it.',
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
			imgAlt: 'a computer screen with a bunch of text on it.',
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
			imgAlt: 'a close up of a person typing on a laptop.',
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
			imgAlt: 'a man sitting in front of a laptop computer.',
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
			imgAlt: 'a close up of two people at a table with a pen and paper.',
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
			imgAlt: 'a jar filled with coins and a plant growing out of it.',
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
			imgAlt: 'a hand writing a business plan on a whiteboard.',
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
			imgAlt: 'a woman sitting at a desk working on a computer.',
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
			imgAlt: 'a man standing in front of a whiteboard giving a presentation.',
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
			imgAlt: '	two 3d people shaking hands on a white background.',
			descriptionText:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem consequatur sapiente harum enim. Laboriosam commodi, quibusdam architecto labore laborum inventore earum nam quia sit dolorum alias sint officiis amet, hic deleniti, omnis fugit eveniet ipsam. Reiciendis ad non voluptates omnis itaque officia, autem praesentium ut molestiae consectetur, officiis quis voluptatibus? Incidunt, mollitia iste. Nemo quis sequi illum fugiat! Soluta repudiandae et sapiente dicta pariatur molestiae dolores reiciendis earum amet quam impedit itaque asperiores ratione, quos delectus quisquam architecto! Autem minima aliquam reiciendis vitae reprehenderit quibusdam possimus dolore ullam adipisci doloribus. Nisi animi perferendis provident repellendus minus unde consectetur est ab!',
		},
	]);
	return (
		<>
			<context.Provider value={{ data, setData }}>{children}</context.Provider>
		</>
	);
}

export default context;
