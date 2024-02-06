"use client";

export default function PDFDown({ data }) {
  const onDownloadPDF = async () => {
    window.print();
  };

  return data && data.items && data.items.length ? (
    <>
      <button
        onClick={onDownloadPDF}
        type="button"
        className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        Download PDF
      </button>
    </>
  ) : (
    ""
  );
}
