export default async function List() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <div className="col-span-6 row-span-6 flex flex-col gap-10">
        <h2>Processo n. _____ do -nome-tribunal</h2>
        <div className="flex flex-col">
          <h4 className="rounded-se-lg rounded-ss-lg bg-zinc-900 border-b-4 border-zinc-950 p-4 font-semibold">
            Movimentações
          </h4>
          <div className="bg-zinc-400 border-b-4 border-zinc-950 text-zinc-950 p-4">
            <p>Date</p>
            <p>Detalhes</p>
          </div>
        </div>
      </div>

      <div className="col-span-3 row-span-3 flex flex-col gap-10">
        <h2>Mais informações</h2>

        <div className="flex flex-col">
          <h4 className="rounded-se-lg rounded-ss-lg bg-zinc-900 border-b-4 border-zinc-950 p-4 font-semibold">
            Detalhes do processo
          </h4>
          <div className="bg-zinc-400 border-b-4 border-zinc-950 text-zinc-950 p-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              commodi exercitationem consequuntur laborum ab dolorum quaerat,
              aut velit corrupti dolores dolorem, eum, debitis itaque voluptatem
              magni placeat minima et laboriosam.
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-3 row-span-3 flex flex-col gap-0">
        <h4 className="rounded-se-lg rounded-ss-lg bg-zinc-900 border-b-4 border-zinc-950 p-4 font-semibold">
          Partes envolvidas
        </h4>
        <div className="flex flex-col">
          <div className="bg-zinc-400 border-b-4 border-zinc-950 text-zinc-950 p-4">
            <p>Pessoa - instituição</p>
            <p>Tipo de envolvimento</p>
          </div>
        </div>
      </div>
    </div>
  )
}
