import {montserrat} from '@/app/fonts';
import Link from 'next/link';
import React from 'react';

type Props = {};

function CoursYoutube({}: Props) {
	return (
		<section>
			<div className="container grid md:grid-cols-2 items-center text-xl md:text-2xl md:py-12">
				<div className="flex flex-col gap-3 items-center md:items-start px-2 py-10 md:p-0">
					<h2 className={`${montserrat.className} text-2xl md:text-5xl font-bold text-app-blue`}>
						{'Nouveau sur'} <span className="mr-2">RabbitMQ</span>
					</h2>
					<div className='text-center md:text-left'>
						<p>{'Regarder notre video youtube'}</p>
						<p>{"L'essai de MQDesk est 100 % gratuit."}</p>
					</div>
					<Link
						href="https://youtu.be/AiNhcHyFyOM?si=PHlLE8QuTBbhGaRR"
						className="md:mt-6 text-app-blue text-lg md:text-xl front-bolder border-b border-app-blue"
						target="_blank"
					>
						Regarder la vidéo
					</Link>
				</div>
				<div className="py-4 hidden md:block">
					<iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/AiNhcHyFyOM?si=RGfow7BnIaYJHYBD"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					></iframe>
				</div>
			</div>
		</section>
	);
}

export default CoursYoutube;
