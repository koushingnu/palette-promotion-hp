export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            CONTACT
          </h2>
          <p className="text-lg text-gray-600">お問い合わせ</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-black mb-4">
                お問い合わせ
              </h3>
              <p className="text-gray-700 mb-8">
                ご質問やお問い合わせがございましたら、下記までご連絡ください。
              </p>

              <div className="flex flex-col items-center space-y-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
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
                  <h4 className="text-lg font-semibold text-black mb-4">
                    メール
                  </h4>
                  <a
                    href="mailto:info@nizi-pale.com"
                    className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
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
                    info@nizi-pale.com
                  </a>
                </div>

                <div className="text-center">
                  <h4 className="text-lg font-semibold text-black mb-2">
                    所在地
                  </h4>
                  <p className="text-gray-700">
                    〒160-0023
                    <br />
                    東京都新宿区西新宿三丁目3番13号　西新宿水間ビル6階
                    <br />
                    株式会社palette promotion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
