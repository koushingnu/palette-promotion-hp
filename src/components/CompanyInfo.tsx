import companyData from "@/data/company.json";

export default function CompanyInfo() {
  const { company } = companyData;

  return (
    <section id="company" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            COMPANY
          </h2>
          <p className="text-lg text-gray-600">会社情報</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="space-y-12">
              {/* 会社名 */}
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
                  {company.name}
                </h3>
              </div>

              {/* 会社概要 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-2 flex items-center">
                      <span className="w-1.5 h-6 bg-black rounded-full mr-3"></span>
                      設立
                    </h4>
                    <p className="text-gray-700 pl-6">{company.established}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-black mb-2 flex items-center">
                      <span className="w-1.5 h-6 bg-black rounded-full mr-3"></span>
                      資本金
                    </h4>
                    <p className="text-gray-700 pl-6">{company.capital}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-black mb-2 flex items-center">
                      <span className="w-1.5 h-6 bg-black rounded-full mr-3"></span>
                      所在地
                    </h4>
                    <p className="text-gray-700 pl-6 whitespace-pre-line">
                      {company.address}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-2 flex items-center">
                      <span className="w-1.5 h-6 bg-black rounded-full mr-3"></span>
                      事業内容
                    </h4>
                    <p className="text-gray-700 pl-6 leading-relaxed">
                      {company.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-black mb-2 flex items-center">
                      <span className="w-1.5 h-6 bg-black rounded-full mr-3"></span>
                      お問い合わせ
                    </h4>
                    <div className="pl-6">
                      <a
                        href={`mailto:${company.email}`}
                        className="inline-flex items-center text-gray-700 hover:text-black transition-colors"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        {company.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
