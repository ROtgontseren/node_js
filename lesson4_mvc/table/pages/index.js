

export default function Home() {
  return (
    <main className="flex justify-center bg-slate-300 h-screen">
      <div class="mt-12 mb-12 border border-black rounded-2xl">
        <table class="table">
             <thead>
                <tr>
                   <th>Зураг</th>
                   <th>Овог нэр</th>
                   <th>Төрсөн он сар</th>
                   <th>Хэлтэс</th>
                   <th className="w-[200px] flex justify-center">Үйлдэлүүд</th>
                 </tr>
             </thead>
             <tbody>
                <tr>
                   <th>
                       <div class="avatar">
                           <div class="mask mask-squircle w-12 h-12">
                                <img src="pablo.jpg"/>
                           </div>
                       </div>
                   </th>
                   <td>
                       <div class="flex items-center space-x-3">
                           <div>
                               <div class="font-bold">Hart Hagerty</div>
                           </div>
                       </div>
                   </td>
                   <td>
                       1976/12/12
                   </td>
                   <td>Purple</td>
                   <th className="flex justify-evenly w-[200px]">
                   <button class="btn btn-primary">  Put  </button>
                   <button class="btn btn-error">Del</button>
                   </th>
                </tr>
                <tr>
                   <th>
                       <div class="avatar">
                           <div class="mask mask-squircle w-12 h-12">
                                <img src="pablo.jpg"/>
                           </div>
                       </div>
                   </th>
                   <td>
                       <div class="flex items-center space-x-3">
                           <div>
                               <div class="font-bold">Hart Hagerty</div>
                           </div>
                       </div>
                   </td>
                   <td>
                       1976/12/12
                   </td>
                   <td>Purple</td>
                   <th className="flex justify-evenly w-[200px]">
                   <button class="btn btn-primary">  Put  </button>
                   <button class="btn btn-error">Del</button>
                   </th>
                </tr>
             </tbody>
        </table>
      </div>
    </main>
  )
}
