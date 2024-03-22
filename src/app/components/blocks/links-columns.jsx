import { ArrowIcon } from '../icons/arrow'
import Container from '../shared/container'
import ExternalImage from '../shared/image'
import Block from './block'
import PageLink from '../shared/page-link'

export default function LinksColumns({ block_options, content: { columns } }) {
	return (
		<Block options={block_options}>
			<Container>
				<div className="flex flex-wrap gap-x-10 gap-y-12 justify-center max-w-[1024px] mx-auto">
					{columns.map(({ image, link, title, text }, key) => {
						return (
							<PageLink key={key} link={link} className="min-w-[350px] max-w-[500px] flex-1">
								<article className={' group/link'}>
									<div className="flex gap-9">
										<div className="w-[150px] flex-grow-0">
											<ExternalImage ratio={'square'} id={image} />
										</div>
										<div className="flex-1 flex flex-col gap-2 ">
											<div className="flex justify-between items-center">
												<h4>{title}</h4>
												<div className="bg-btn-bg text-btn-text rounded-full aspect-square p-4  group-hover/link:bg-btn-bg-hover group-hover/link:text-btn-text-hover transition  duration-300">
													<ArrowIcon
														className={
															'w-[18px] h-[18px] group-hover/link:rotate-45 transition ease-[cubic-bezier(.175,.885,.32,1.8)] duration-300'
														}
													/>
												</div>
											</div>
											<p className="text-base">{text}</p>
										</div>
									</div>
								</article>
							</PageLink>
						)
					})}
				</div>
			</Container>
		</Block>
	)
}
