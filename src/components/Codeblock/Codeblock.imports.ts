// IMPORT LANGUAGE TOOLS
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/ext-emmet";

// IMPORT THEMES
import "ace-builds/src-min-noconflict/theme-cobalt.js";

// IMPORT LANGUAGES
import "ace-builds/src-min-noconflict/mode-abap";
import "ace-builds/src-min-noconflict/mode-abc";
import "ace-builds/src-min-noconflict/mode-actionscript";
import "ace-builds/src-min-noconflict/mode-ada";
import "ace-builds/src-min-noconflict/mode-alda";
import "ace-builds/src-min-noconflict/mode-apache_conf";
import "ace-builds/src-min-noconflict/mode-apex";
import "ace-builds/src-min-noconflict/mode-applescript";
import "ace-builds/src-min-noconflict/mode-aql";
import "ace-builds/src-min-noconflict/mode-asciidoc";
import "ace-builds/src-min-noconflict/mode-asl";
import "ace-builds/src-min-noconflict/mode-assembly_x86";
import "ace-builds/src-min-noconflict/mode-autohotkey";
import "ace-builds/src-min-noconflict/mode-batchfile";
import "ace-builds/src-min-noconflict/mode-c9search";
import "ace-builds/src-min-noconflict/mode-c_cpp";
import "ace-builds/src-min-noconflict/mode-cirru";
import "ace-builds/src-min-noconflict/mode-clojure";
import "ace-builds/src-min-noconflict/mode-cobol";
import "ace-builds/src-min-noconflict/mode-coffee";
import "ace-builds/src-min-noconflict/mode-coldfusion";
import "ace-builds/src-min-noconflict/mode-crystal";
import "ace-builds/src-min-noconflict/mode-csharp";
import "ace-builds/src-min-noconflict/mode-csound_document";
import "ace-builds/src-min-noconflict/mode-csound_orchestra";
import "ace-builds/src-min-noconflict/mode-csound_score";
import "ace-builds/src-min-noconflict/mode-csp";
import "ace-builds/src-min-noconflict/mode-css";
import "ace-builds/src-min-noconflict/mode-curly";
import "ace-builds/src-min-noconflict/mode-d";
import "ace-builds/src-min-noconflict/mode-dart";
import "ace-builds/src-min-noconflict/mode-diff";
import "ace-builds/src-min-noconflict/mode-django";
import "ace-builds/src-min-noconflict/mode-dockerfile";
import "ace-builds/src-min-noconflict/mode-dot";
import "ace-builds/src-min-noconflict/mode-drools";
import "ace-builds/src-min-noconflict/mode-edifact";
import "ace-builds/src-min-noconflict/mode-eiffel";
import "ace-builds/src-min-noconflict/mode-ejs";
import "ace-builds/src-min-noconflict/mode-elixir";
import "ace-builds/src-min-noconflict/mode-elm";
import "ace-builds/src-min-noconflict/mode-erlang";
import "ace-builds/src-min-noconflict/mode-forth";
import "ace-builds/src-min-noconflict/mode-fortran";
import "ace-builds/src-min-noconflict/mode-fsharp";
import "ace-builds/src-min-noconflict/mode-fsl";
import "ace-builds/src-min-noconflict/mode-ftl";
import "ace-builds/src-min-noconflict/mode-gcode";
import "ace-builds/src-min-noconflict/mode-gherkin";
import "ace-builds/src-min-noconflict/mode-gitignore";
import "ace-builds/src-min-noconflict/mode-glsl";
import "ace-builds/src-min-noconflict/mode-gobstones";
import "ace-builds/src-min-noconflict/mode-golang";
import "ace-builds/src-min-noconflict/mode-graphqlschema";
import "ace-builds/src-min-noconflict/mode-groovy";
import "ace-builds/src-min-noconflict/mode-haml";
import "ace-builds/src-min-noconflict/mode-handlebars";
import "ace-builds/src-min-noconflict/mode-haskell";
import "ace-builds/src-min-noconflict/mode-haskell_cabal";
import "ace-builds/src-min-noconflict/mode-haxe";
import "ace-builds/src-min-noconflict/mode-hjson";
import "ace-builds/src-min-noconflict/mode-html";
import "ace-builds/src-min-noconflict/mode-html_elixir";
import "ace-builds/src-min-noconflict/mode-html_ruby";
import "ace-builds/src-min-noconflict/mode-ini";
import "ace-builds/src-min-noconflict/mode-io";
import "ace-builds/src-min-noconflict/mode-jack";
import "ace-builds/src-min-noconflict/mode-jade";
import "ace-builds/src-min-noconflict/mode-java";
import "ace-builds/src-min-noconflict/mode-javascript";
import "ace-builds/src-min-noconflict/mode-json";
import "ace-builds/src-min-noconflict/mode-json5";
import "ace-builds/src-min-noconflict/mode-jsoniq";
import "ace-builds/src-min-noconflict/mode-jsp";
import "ace-builds/src-min-noconflict/mode-jssm";
import "ace-builds/src-min-noconflict/mode-jsx";
import "ace-builds/src-min-noconflict/mode-julia";
import "ace-builds/src-min-noconflict/mode-kotlin";
import "ace-builds/src-min-noconflict/mode-latex";
import "ace-builds/src-min-noconflict/mode-less";
import "ace-builds/src-min-noconflict/mode-liquid";
import "ace-builds/src-min-noconflict/mode-lisp";
import "ace-builds/src-min-noconflict/mode-livescript";
import "ace-builds/src-min-noconflict/mode-logiql";
import "ace-builds/src-min-noconflict/mode-logtalk";
import "ace-builds/src-min-noconflict/mode-lsl";
import "ace-builds/src-min-noconflict/mode-lua";
import "ace-builds/src-min-noconflict/mode-luapage";
import "ace-builds/src-min-noconflict/mode-lucene";
import "ace-builds/src-min-noconflict/mode-makefile";
import "ace-builds/src-min-noconflict/mode-markdown";
import "ace-builds/src-min-noconflict/mode-mask";
import "ace-builds/src-min-noconflict/mode-matlab";
import "ace-builds/src-min-noconflict/mode-maze";
import "ace-builds/src-min-noconflict/mode-mediawiki";
import "ace-builds/src-min-noconflict/mode-mel";
import "ace-builds/src-min-noconflict/mode-mixal";
import "ace-builds/src-min-noconflict/mode-mushcode";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-min-noconflict/mode-nginx";
import "ace-builds/src-min-noconflict/mode-nim";
import "ace-builds/src-min-noconflict/mode-nix";
import "ace-builds/src-min-noconflict/mode-nsis";
import "ace-builds/src-min-noconflict/mode-nunjucks";
import "ace-builds/src-min-noconflict/mode-objectivec";
import "ace-builds/src-min-noconflict/mode-ocaml";
import "ace-builds/src-min-noconflict/mode-pascal";
import "ace-builds/src-min-noconflict/mode-perl";
import "ace-builds/src-min-noconflict/mode-perl6";
import "ace-builds/src-min-noconflict/mode-pgsql";
import "ace-builds/src-min-noconflict/mode-php";
import "ace-builds/src-min-noconflict/mode-php_laravel_blade";
import "ace-builds/src-min-noconflict/mode-pig";
import "ace-builds/src-min-noconflict/mode-plain_text";
import "ace-builds/src-min-noconflict/mode-powershell";
import "ace-builds/src-min-noconflict/mode-praat";
import "ace-builds/src-min-noconflict/mode-prisma";
import "ace-builds/src-min-noconflict/mode-prolog";
import "ace-builds/src-min-noconflict/mode-properties";
import "ace-builds/src-min-noconflict/mode-protobuf";
import "ace-builds/src-min-noconflict/mode-puppet";
import "ace-builds/src-min-noconflict/mode-python";
import "ace-builds/src-min-noconflict/mode-qml";
import "ace-builds/src-min-noconflict/mode-r";
import "ace-builds/src-min-noconflict/mode-razor";
import "ace-builds/src-min-noconflict/mode-rdoc";
import "ace-builds/src-min-noconflict/mode-red";
import "ace-builds/src-min-noconflict/mode-redshift";
import "ace-builds/src-min-noconflict/mode-rhtml";
import "ace-builds/src-min-noconflict/mode-rst";
import "ace-builds/src-min-noconflict/mode-ruby";
import "ace-builds/src-min-noconflict/mode-rust";
import "ace-builds/src-min-noconflict/mode-sass";
import "ace-builds/src-min-noconflict/mode-scad";
import "ace-builds/src-min-noconflict/mode-scala";
import "ace-builds/src-min-noconflict/mode-scheme";
import "ace-builds/src-min-noconflict/mode-scss";
import "ace-builds/src-min-noconflict/mode-sh";
import "ace-builds/src-min-noconflict/mode-sjs";
import "ace-builds/src-min-noconflict/mode-slim";
import "ace-builds/src-min-noconflict/mode-smarty";
import "ace-builds/src-min-noconflict/mode-snippets";
import "ace-builds/src-min-noconflict/mode-soy_template";
import "ace-builds/src-min-noconflict/mode-space";
import "ace-builds/src-min-noconflict/mode-sparql";
import "ace-builds/src-min-noconflict/mode-sql";
import "ace-builds/src-min-noconflict/mode-sqlserver";
import "ace-builds/src-min-noconflict/mode-stylus";
import "ace-builds/src-min-noconflict/mode-svg";
import "ace-builds/src-min-noconflict/mode-swift";
import "ace-builds/src-min-noconflict/mode-tcl";
import "ace-builds/src-min-noconflict/mode-terraform";
import "ace-builds/src-min-noconflict/mode-tex";
import "ace-builds/src-min-noconflict/mode-text";
import "ace-builds/src-min-noconflict/mode-textile";
import "ace-builds/src-min-noconflict/mode-toml";
import "ace-builds/src-min-noconflict/mode-tsx";
import "ace-builds/src-min-noconflict/mode-turtle";
import "ace-builds/src-min-noconflict/mode-twig";
import "ace-builds/src-min-noconflict/mode-typescript";
import "ace-builds/src-min-noconflict/mode-vala";
import "ace-builds/src-min-noconflict/mode-vbscript";
import "ace-builds/src-min-noconflict/mode-velocity";
import "ace-builds/src-min-noconflict/mode-verilog";
import "ace-builds/src-min-noconflict/mode-vhdl";
import "ace-builds/src-min-noconflict/mode-visualforce";
import "ace-builds/src-min-noconflict/mode-wollok";
import "ace-builds/src-min-noconflict/mode-xml";
import "ace-builds/src-min-noconflict/mode-xquery";
import "ace-builds/src-min-noconflict/mode-yaml";
import "ace-builds/src-min-noconflict/mode-zeek";

// IMPORT LANGUAGE SNIPPETS
import "ace-builds/src-min-noconflict/snippets/abap";
import "ace-builds/src-min-noconflict/snippets/abc";
import "ace-builds/src-min-noconflict/snippets/actionscript";
import "ace-builds/src-min-noconflict/snippets/ada";
import "ace-builds/src-min-noconflict/snippets/alda";
import "ace-builds/src-min-noconflict/snippets/apache_conf";
import "ace-builds/src-min-noconflict/snippets/apex";
import "ace-builds/src-min-noconflict/snippets/applescript";
import "ace-builds/src-min-noconflict/snippets/aql";
import "ace-builds/src-min-noconflict/snippets/asciidoc";
import "ace-builds/src-min-noconflict/snippets/asl";
import "ace-builds/src-min-noconflict/snippets/assembly_x86";
import "ace-builds/src-min-noconflict/snippets/autohotkey";
import "ace-builds/src-min-noconflict/snippets/batchfile";
import "ace-builds/src-min-noconflict/snippets/c9search";
import "ace-builds/src-min-noconflict/snippets/c_cpp";
import "ace-builds/src-min-noconflict/snippets/cirru";
import "ace-builds/src-min-noconflict/snippets/clojure";
import "ace-builds/src-min-noconflict/snippets/cobol";
import "ace-builds/src-min-noconflict/snippets/coffee";
import "ace-builds/src-min-noconflict/snippets/coldfusion";
import "ace-builds/src-min-noconflict/snippets/crystal";
import "ace-builds/src-min-noconflict/snippets/csharp";
import "ace-builds/src-min-noconflict/snippets/csound_document";
import "ace-builds/src-min-noconflict/snippets/csound_orchestra";
import "ace-builds/src-min-noconflict/snippets/csound_score";
import "ace-builds/src-min-noconflict/snippets/csp";
import "ace-builds/src-min-noconflict/snippets/css";
import "ace-builds/src-min-noconflict/snippets/curly";
import "ace-builds/src-min-noconflict/snippets/d";
import "ace-builds/src-min-noconflict/snippets/dart";
import "ace-builds/src-min-noconflict/snippets/diff";
import "ace-builds/src-min-noconflict/snippets/django";
import "ace-builds/src-min-noconflict/snippets/dockerfile";
import "ace-builds/src-min-noconflict/snippets/dot";
import "ace-builds/src-min-noconflict/snippets/drools";
import "ace-builds/src-min-noconflict/snippets/edifact";
import "ace-builds/src-min-noconflict/snippets/eiffel";
import "ace-builds/src-min-noconflict/snippets/ejs";
import "ace-builds/src-min-noconflict/snippets/elixir";
import "ace-builds/src-min-noconflict/snippets/elm";
import "ace-builds/src-min-noconflict/snippets/erlang";
import "ace-builds/src-min-noconflict/snippets/forth";
import "ace-builds/src-min-noconflict/snippets/fortran";
import "ace-builds/src-min-noconflict/snippets/fsharp";
import "ace-builds/src-min-noconflict/snippets/fsl";
import "ace-builds/src-min-noconflict/snippets/ftl";
import "ace-builds/src-min-noconflict/snippets/gcode";
import "ace-builds/src-min-noconflict/snippets/gherkin";
import "ace-builds/src-min-noconflict/snippets/gitignore";
import "ace-builds/src-min-noconflict/snippets/glsl";
import "ace-builds/src-min-noconflict/snippets/gobstones";
import "ace-builds/src-min-noconflict/snippets/golang";
import "ace-builds/src-min-noconflict/snippets/graphqlschema";
import "ace-builds/src-min-noconflict/snippets/groovy";
import "ace-builds/src-min-noconflict/snippets/haml";
import "ace-builds/src-min-noconflict/snippets/handlebars";
import "ace-builds/src-min-noconflict/snippets/haskell";
import "ace-builds/src-min-noconflict/snippets/haskell_cabal";
import "ace-builds/src-min-noconflict/snippets/haxe";
import "ace-builds/src-min-noconflict/snippets/hjson";
import "ace-builds/src-min-noconflict/snippets/html";
import "ace-builds/src-min-noconflict/snippets/html_elixir";
import "ace-builds/src-min-noconflict/snippets/html_ruby";
import "ace-builds/src-min-noconflict/snippets/ini";
import "ace-builds/src-min-noconflict/snippets/io";
import "ace-builds/src-min-noconflict/snippets/jack";
import "ace-builds/src-min-noconflict/snippets/jade";
import "ace-builds/src-min-noconflict/snippets/java";
import "ace-builds/src-min-noconflict/snippets/javascript";
import "ace-builds/src-min-noconflict/snippets/json";
import "ace-builds/src-min-noconflict/snippets/json5";
import "ace-builds/src-min-noconflict/snippets/jsoniq";
import "ace-builds/src-min-noconflict/snippets/jsp";
import "ace-builds/src-min-noconflict/snippets/jssm";
import "ace-builds/src-min-noconflict/snippets/jsx";
import "ace-builds/src-min-noconflict/snippets/julia";
import "ace-builds/src-min-noconflict/snippets/kotlin";
import "ace-builds/src-min-noconflict/snippets/latex";
import "ace-builds/src-min-noconflict/snippets/less";
import "ace-builds/src-min-noconflict/snippets/liquid";
import "ace-builds/src-min-noconflict/snippets/lisp";
import "ace-builds/src-min-noconflict/snippets/livescript";
import "ace-builds/src-min-noconflict/snippets/logiql";
import "ace-builds/src-min-noconflict/snippets/logtalk";
import "ace-builds/src-min-noconflict/snippets/lsl";
import "ace-builds/src-min-noconflict/snippets/lua";
import "ace-builds/src-min-noconflict/snippets/luapage";
import "ace-builds/src-min-noconflict/snippets/lucene";
import "ace-builds/src-min-noconflict/snippets/makefile";
import "ace-builds/src-min-noconflict/snippets/markdown";
import "ace-builds/src-min-noconflict/snippets/mask";
import "ace-builds/src-min-noconflict/snippets/matlab";
import "ace-builds/src-min-noconflict/snippets/maze";
import "ace-builds/src-min-noconflict/snippets/mediawiki";
import "ace-builds/src-min-noconflict/snippets/mel";
import "ace-builds/src-min-noconflict/snippets/mixal";
import "ace-builds/src-min-noconflict/snippets/mushcode";
import "ace-builds/src-min-noconflict/snippets/mysql";
import "ace-builds/src-min-noconflict/snippets/nginx";
import "ace-builds/src-min-noconflict/snippets/nim";
import "ace-builds/src-min-noconflict/snippets/nix";
import "ace-builds/src-min-noconflict/snippets/nsis";
import "ace-builds/src-min-noconflict/snippets/nunjucks";
import "ace-builds/src-min-noconflict/snippets/objectivec";
import "ace-builds/src-min-noconflict/snippets/ocaml";
import "ace-builds/src-min-noconflict/snippets/pascal";
import "ace-builds/src-min-noconflict/snippets/perl";
import "ace-builds/src-min-noconflict/snippets/perl6";
import "ace-builds/src-min-noconflict/snippets/pgsql";
import "ace-builds/src-min-noconflict/snippets/php";
import "ace-builds/src-min-noconflict/snippets/php_laravel_blade";
import "ace-builds/src-min-noconflict/snippets/pig";
import "ace-builds/src-min-noconflict/snippets/plain_text";
import "ace-builds/src-min-noconflict/snippets/powershell";
import "ace-builds/src-min-noconflict/snippets/praat";
import "ace-builds/src-min-noconflict/snippets/prisma";
import "ace-builds/src-min-noconflict/snippets/prolog";
import "ace-builds/src-min-noconflict/snippets/properties";
import "ace-builds/src-min-noconflict/snippets/protobuf";
import "ace-builds/src-min-noconflict/snippets/puppet";
import "ace-builds/src-min-noconflict/snippets/python";
import "ace-builds/src-min-noconflict/snippets/qml";
import "ace-builds/src-min-noconflict/snippets/r";
import "ace-builds/src-min-noconflict/snippets/razor";
import "ace-builds/src-min-noconflict/snippets/rdoc";
import "ace-builds/src-min-noconflict/snippets/red";
import "ace-builds/src-min-noconflict/snippets/redshift";
import "ace-builds/src-min-noconflict/snippets/rhtml";
import "ace-builds/src-min-noconflict/snippets/rst";
import "ace-builds/src-min-noconflict/snippets/ruby";
import "ace-builds/src-min-noconflict/snippets/rust";
import "ace-builds/src-min-noconflict/snippets/sass";
import "ace-builds/src-min-noconflict/snippets/scad";
import "ace-builds/src-min-noconflict/snippets/scala";
import "ace-builds/src-min-noconflict/snippets/scheme";
import "ace-builds/src-min-noconflict/snippets/scss";
import "ace-builds/src-min-noconflict/snippets/sh";
import "ace-builds/src-min-noconflict/snippets/sjs";
import "ace-builds/src-min-noconflict/snippets/slim";
import "ace-builds/src-min-noconflict/snippets/smarty";
import "ace-builds/src-min-noconflict/snippets/snippets";
import "ace-builds/src-min-noconflict/snippets/soy_template";
import "ace-builds/src-min-noconflict/snippets/space";
import "ace-builds/src-min-noconflict/snippets/sparql";
import "ace-builds/src-min-noconflict/snippets/sql";
import "ace-builds/src-min-noconflict/snippets/sqlserver";
import "ace-builds/src-min-noconflict/snippets/stylus";
import "ace-builds/src-min-noconflict/snippets/svg";
import "ace-builds/src-min-noconflict/snippets/swift";
import "ace-builds/src-min-noconflict/snippets/tcl";
import "ace-builds/src-min-noconflict/snippets/terraform";
import "ace-builds/src-min-noconflict/snippets/tex";
import "ace-builds/src-min-noconflict/snippets/text";
import "ace-builds/src-min-noconflict/snippets/textile";
import "ace-builds/src-min-noconflict/snippets/toml";
import "ace-builds/src-min-noconflict/snippets/tsx";
import "ace-builds/src-min-noconflict/snippets/turtle";
import "ace-builds/src-min-noconflict/snippets/twig";
import "ace-builds/src-min-noconflict/snippets/typescript";
import "ace-builds/src-min-noconflict/snippets/vala";
import "ace-builds/src-min-noconflict/snippets/vbscript";
import "ace-builds/src-min-noconflict/snippets/velocity";
import "ace-builds/src-min-noconflict/snippets/verilog";
import "ace-builds/src-min-noconflict/snippets/vhdl";
import "ace-builds/src-min-noconflict/snippets/visualforce";
import "ace-builds/src-min-noconflict/snippets/wollok";
import "ace-builds/src-min-noconflict/snippets/xml";
import "ace-builds/src-min-noconflict/snippets/xquery";
import "ace-builds/src-min-noconflict/snippets/yaml";
import "ace-builds/src-min-noconflict/snippets/zeek";
