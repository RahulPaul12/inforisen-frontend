const Titlebar = ({title}:{title:string}) => {
    return (
        <div className="w-fit mx-auto mb-4                                                          ">
            <p className="text-lg font-semibold text-primary uppercase">{title}</p>
            <div className="relative h-1 w-full bg-primary rounded-full">
              <div className="absolute top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-primary animate-titlebar"></div>
            </div>
        </div>
    )
}
export default Titlebar