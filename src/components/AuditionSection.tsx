export default function AuditionSection() {
  return (
    <section id="audition" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            AUDITION
          </h2>
          <p className="text-lg text-gray-600">オーディション情報</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-black mb-6">
                新メンバーオーディション開催中
              </h3>
              <p className="text-gray-700 mb-8">
                NiziIROぱれっとの新メンバーを募集しています。
                一緒に夢を追いかけませんか？
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-black mb-4">
                    応募条件
                  </h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• 年齢：15歳〜25歳</li>
                    <li>• 歌・ダンス・パフォーマンス能力</li>
                    <li>• チームワークを大切にできる方</li>
                    <li>• 夢に向かって努力できる方</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-black mb-4">
                    応募方法
                  </h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• 応募フォームからエントリー</li>
                    <li>• 自己紹介動画の提出</li>
                    <li>• 書類選考</li>
                    <li>• 面接・実技審査</li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                  応募する
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
