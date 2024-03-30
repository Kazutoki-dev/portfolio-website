"use client";

import Image from "next/image";

const Malta = () => {
  // 画像の枚数
  const PHOTO_NUMBER = 14;

  // 画像のデータの配列の生成
  const createImageData = (PHOTO_NUMBER: number) => {
    let images = [];

    for (let i = 1; i <= PHOTO_NUMBER; i++) {
      images.push({
        id_before: `slide${i - 1 === 0 ? PHOTO_NUMBER : i - 1}`,
        id: `slide${i}`,
        id_after: `slide${i + 1 === PHOTO_NUMBER ? 1 : i + 1}`,
        src: `/country/malta/${i}.jpeg`,
      });
    }
    return images;
  };

  const props = {
    data: createImageData(PHOTO_NUMBER),
  };

  return (
    <div>
      <div className="mt-8 mb-12">
        <h2 className="text-5xl text-center">Malta</h2>
      </div>
      <div className="flex flex-wrap justify-center items-center image-box m-auto">
        {props.data.map((data, index) => (
          <div key={index}>
            <div
              className="w-96 h-72 mx-4 flex justify-center items-center"
              onClick={() => {
                const dialog = document.getElementById(data.id);
                if (dialog instanceof HTMLDialogElement) {
                  dialog.showModal();
                } else {
                  console.error(
                    "Dialog element not found or incorrect element type"
                  );
                }
              }}
            >
              <Image
                src={data.src}
                alt={data.id}
                width={1200}
                height={800}
                className="m-auto"
              />
            </div>
            <dialog id={data.id} className="modal">
              <div className="modal-box w-5/6 max-w-6xl max-h-11/12">
                <Image
                  src={data.src}
                  alt={data.id}
                  style={{ objectFit: "contain" }}
                  width={1200}
                  height={800}
                  className="m-auto max-h-11/12"
                />
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Malta;
