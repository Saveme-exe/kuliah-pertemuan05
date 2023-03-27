function Card() {
    return (
        <>
        <div class="flex justify-center items-center h-full w-full bg-gradient-to-r from-cyan-500 to-gray-200">
        <div class="w-1/2 bg-white rounded-lg shadow-2xl p-8 m-4">
         <h1 class="block w-full text-center text-black-800 text-2xl font-bold mb-6">
           Kartu Tanda Pengenal
         </h1>
         <img src="assets/image/profilbiru1.png" class="flex w-1/5 items-center" alt=""   />
         <br />
         <form action="/" method="post">
           <div class="flex flex-col mb-4">
            <label
               class="mb-2 font-bold text-lg text-gray-900"
               for="nama"
            >
              Nama :
            </label>
            <input
              class="border py-2 px-3 text-grey-800"
              placeholder="Alessandro Danielo Pangandaheng"
              type="text"
              name="nama"
              id="nama"
            />
            <label
               class="mb-2 font-bold text-lg text-gray-900"
               for="tempat/tanggallahir"
            >
             Tempat/Tanggal Lahir :
             </label>
            <input
              class="border py-2 px-3 text-grey-800"
              placeholder="Tahuna, 01-08-2003"
              type="text"
              name="tempat/tanggallahir"
              id="tempat/tanggallahir"
            />
            <label
               class="mb-2 font-bold text-lg text-gray-900"
               for="jeniskelamin"
            >
             Jenis Kelamin :
             </label>
            <input
              class="border py-2 px-3 text-grey-800"
              placeholder="Laki-laki"
              type="text"
              name="jeniskelamin"
              id="jeniskelamin"
            />
            <label
               class="mb-2 font-bold text-lg text-gray-900"
               for="alamat"
            >
             Alamat :
             </label>
            <input
              class="border py-2 px-3 text-grey-800"
              placeholder="Kelurahan Tapuang"
              type="text"
              name="alamat"
              id="alamat"
            />
            RT/RW :
             <input
              class="border py-2 px-3 text-grey-800"
              placeholder="001/000"
              type="text"
              name="rt/rw"
              id="rt/rw"
            />
            Kelurahan/Desa :
             <input
              class="border py-2 px-3 text-grey-800"
              placeholder="Tapuang"
              type="text"
              name="kelurahan/desa"
              id="kelurahan/desa"
            />
            Kecamatan :
             <input
              class="border py-2 px-3 text-grey-800"
              placeholder="Tahuna Timur"
              type="text"
              name="kecamatan"
              id="kecamatan"
            />
            <label
               class="mb-2 font-bold text-lg text-gray-900"
               for="agama"
            >
             Agama :
             </label>
            <input
              class="border py-2 px-3 text-grey-800"
              placeholder="Kristen Protestan"
              type="text"
              name="agama"
              id="agama"
            /> 
            </div>
            <button
              class="block bg-orange-400 hover:bg-orange-600 text-white uppercase text-lg mx-auto p-4 rounded"
              type="submit"
            >
                Sign-In
            </button>
            </form>
            <a
              class="block w-full text-center no-underline mt-4 text-sm text-gray-700 hover:text-gray-900"
              href="/"
            >
                Telah memiliki Akun?
            </a>
        </div>
    </div>
  </>
    );
}

export default Card;