import companyData from "@/data/company.json";

export default function ContactSection() {
  const { contact } = companyData;

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            CONTACT
          </h2>
          <p className="text-lg text-gray-600">
            お仕事のご依頼・ご相談はこちらまで
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="text-center">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-black mb-4">
                  お問い合わせ
                </h3>
                <p className="text-gray-600 mb-6">
                  お仕事のご依頼・ご相談・取材のお申し込みなど、
                  <br />
                  お気軽にお問い合わせください。
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="flex flex-col items-center">
                  <div className="mb-6">
                    <svg
                      className="w-12 h-12 text-gray-400 mx-auto mb-4"
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
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">メールアドレス</p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-xl md:text-2xl font-semibold text-blue-600 hover:text-blue-700 transition-colors break-all"
                    >
                      {contact.email}
                    </a>
                  </div>

                  <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>営業時間:</strong> 平日 10:00-18:00
                      <br />
                      <strong>お返事:</strong>{" "}
                      3営業日以内を目安にご返信いたします
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* お問い合わせの種類 */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-black text-center mb-8">
            お問い合わせの種類
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-black mb-2">タレント派遣</h4>
              <p className="text-sm text-gray-600">
                イベント・番組出演のご依頼
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-black mb-2">企画制作</h4>
              <p className="text-sm text-gray-600">番組・イベントの企画制作</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-black mb-2">その他</h4>
              <p className="text-sm text-gray-600">取材・コラボレーション等</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
