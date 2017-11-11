'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Helmet = require('../components/atoms/Helmet');

var _Helmet2 = _interopRequireDefault(_Helmet);

var _BigSearch = require('../components/molecules/BigSearch');

var _BigSearch2 = _interopRequireDefault(_BigSearch);

var _PopularResult = require('../components/organisms/PopularResult');

var _PopularResult2 = _interopRequireDefault(_PopularResult);

var _DeckResult = require('../components/molecules/DeckResult');

var _DeckResult2 = _interopRequireDefault(_DeckResult);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Helmet2.default, {
                    title: 'Birokrasi Mudah - Iya.. serius !'
                }),
                _react2.default.createElement(_BigSearch2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'grid-center' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-8_col-md-12_col-sm-12 home-help' },
                            _react2.default.createElement(
                                'a',
                                { href: 'javascript:;', onClick: function onClick() {
                                        return modal.show('Cara Menggunakan', 'modal-howtouse');
                                    } },
                                'Cara Menggunakan'
                            ),
                            _react2.default.createElement(
                                'a',
                                { href: 'javascript:;', onClick: function onClick() {
                                        return modal.show('Sumber Data', 'modal-datasource');
                                    } },
                                'Sumber Data'
                            ),
                            _react2.default.createElement(
                                'a',
                                { href: 'javascript:;', onClick: function onClick() {
                                        return modal.show('Kontak kami', 'modal-contact');
                                    } },
                                'Kontak Kami'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'hide', id: 'modal-howtouse' },
                    _react2.default.createElement(
                        'article',
                        null,
                        _react2.default.createElement(
                            'h3',
                            null,
                            'Halaman Pencarian'
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'Gunakan pencarian yang ada di halaman depan untuk sesuai dengan urusan yang akan anda lakukan di pemerintahan. Tiap anda melakukan pengetikan akan ada beberapa rekomendasi yang ditampilkan, klik rekomendasi tersebut untuk info lebih lengkap.'
                        ),
                        _react2.default.createElement(
                            'h3',
                            null,
                            'Hasil Pencarian'
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'Dari hasil pencarian anda akan mendapatkan beberapa data antara lain :',
                            _react2.default.createElement('br', null),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'strong',
                                null,
                                'Lokasi'
                            ),
                            ', dimana urusan tersebut bisa dilakukan, lokasi meliputi data sebagai berikut (koordinat, jadwal operasional, dan lokasi lainnya jika lebih dari satu lokasi).',
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'strong',
                                null,
                                'Persyaratan'
                            ),
                            ', meliputi berbagai persyaratan yang wajib anda lakukan sebelum datang kekantor lembaga untuk dilakukan ke langkah selanjutnya.',
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'strong',
                                null,
                                'Mekanisme'
                            ),
                            ', adalah beberapa langkah yang harus anda lakukan ketika sampai di lembaga yang bersangkutan.',
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'strong',
                                null,
                                'Kontak'
                            ),
                            ', berbagai macam kontak yang bisa anda hubungi berdasarkan pilihan kota dan lembaga yang tertera untuk mendapatkan keterangan lebih lengkap, kontak bisa meliputi nomor telepon, email dan bahkan sosial media.'
                        ),
                        _react2.default.createElement(
                            'h3',
                            null,
                            'Utilitas'
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'Dari ',
                            _react2.default.createElement(
                                'strong',
                                null,
                                'persyaratan dan mekanisme'
                            ),
                            ' yang ada di halaman hasil pencarian terdapat checklist yang membantu anda untuk menandai bagian mana saja yang sudah dikerjakan atau belum, untuk kemudian tekan tombol save dan autosave untuk dibuka di haris berikutnya. Anda bisa menyimpan hasil pencarian tersebut kedokumen PDF untuk digunakan kemudian sesuai kebutuhan.'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'hide', id: 'modal-datasource' },
                    _react2.default.createElement(
                        'article',
                        null,
                        'Data yang tambil di platform ini, didapatkan dari beberapa sumber :',
                        _react2.default.createElement('br', null),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'strong',
                            null,
                            'Admin "BirokrasiMudah"'
                        ),
                        ', diinput oleh admin berdasarkan hasil pengamatan langsung di kantor lembaga, pengalaman sendiri, dan pengalaman dari pengguna platform.',
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'strong',
                            null,
                            'Perwakilan Lembaga'
                        ),
                        ', langsung diinput oleh perwakilan lembaga yang sudah mendapatkan akses ke platform.',
                        _react2.default.createElement('br', null),
                        _react2.default.createElement('br', null),
                        'Pengguna bisa mengetahui penulis konten di hasil pencarian menggunakan menu log.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'hide', id: 'modal-contact' },
                    _react2.default.createElement(
                        'article',
                        null,
                        'Jika anda menemukan bug, kritik dan saran, atau kontak tim kami secara langsung silahkan mengirimkan email ke ',
                        _react2.default.createElement(
                            'a',
                            { style: { color: '#F4F4F4' }, href: 'mailto:yussandeveloper@gmail.com' },
                            'yussandeveloper@gmail.com'
                        )
                    )
                ),
                _react2.default.createElement('div', { className: 'm-lg' }),
                _react2.default.createElement(_PopularResult2.default, null)
            );
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;