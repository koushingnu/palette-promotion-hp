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
          <p className="text-lg text-gray-600">
            株式会社palette promotionについて
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 基本情報 */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">
                    基本情報
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-gray-800">社名:</span>
                      <span className="ml-2 text-gray-600">{company.name}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-800">設立:</span>
                      <span className="ml-2 text-gray-600">
                        {company.established}
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-800">資本金:</span>
                      <span className="ml-2 text-gray-600">
                        {company.capital}
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-800">住所:</span>
                      <span className="ml-2 text-gray-600">
                        {company.address}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">
                    事業内容
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {company.business}
                  </p>
                </div>
              </div>

              {/* 事業内容詳細 */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">
                    取引銀行
                  </h3>
                  <p className="text-gray-600">{company.bank}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">
                    事業領域
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-100 p-3 rounded-lg text-center">
                      <span className="text-sm font-medium text-gray-800">
                        俳優・タレント
                      </span>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg text-center">
                      <span className="text-sm font-medium text-gray-800">
                        モデル・歌手
                      </span>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg text-center">
                      <span className="text-sm font-medium text-gray-800">
                        スポーツ選手
                      </span>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg text-center">
                      <span className="text-sm font-medium text-gray-800">
                        文化人
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">
                    サービス
                  </h3>
                  <ul className="space-y-2">
                    <li className="text-gray-600 flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      マネージメント・プロデュース
                    </li>
                    <li className="text-gray-600 flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      番組・催物の企画制作
                    </li>
                    <li className="text-gray-600 flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      出版物の企画制作
                    </li>
                    <li className="text-gray-600 flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      広告宣伝物の企画制作代理業
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
