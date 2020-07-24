# Gestor para Arrecadações AME

-------------------------

## Comandos GIT utilizados

1. Inicializar um diretório local

  ```
  git init
  ```

2. Clonar um diretório online

  ```
	git clone https://github.com/alitecsolucoes/vue2-webpack4-tailwind-firebase-alijunior.git
  ```


3. Verificar o status das modificações

  ```
	git log --oneline
  ```

4. Adicionar as modificações

  ```
	git add .
  ```

5. Dar o commit

  ```
	git commit -m "comentário"
  ```

6. Excluir commit mas manter os arquivos atuais (c7c6a5b é o nome do commit no git log)

  ```
	git reset c7c6a5b
  ```

7. Criar um branch

  ```
	git branch testar-caracteristica-tal
  ```

8. Verificar o branch atual

  ```
	git branch -a
  ```

9. Modificar para o branch

  ```
	git checkout testar-caracteristica-tal
  ```

10. Criar um branch e já modificar para ele

  ```
	git checkout -b testar-caracteristica-outra
  ```

11. Voltar para o branch master

  ```
	git checkout master
  ```

12. Excluir branch

  ```
	git branch -d testar-caracteristica-tal
	git branch -D testar-caracteristica-tal  <- caso haja modificações 'not merged'
  ```

13. Mesclar branch no master

  ```
	git checkout testar-caracteristica-tal
	git commit -m "implementação da característica tal"
	git checkout master
	git merge testar-caracteristica-tal
  ```

14. Verificar conflitos nos arquivos listados e então dar o commit no merge

  ```
	git add .
	git commit
  ```

15. Na tela de conflito do commit merge

	<kbd>SHIFT</kbd> + <kbd>:</kbd>
	<kbd>w</kbd> <kbd>q</kbd>

16. Sincronizar com o reporitório remoto

  ```
  git pull
  ```

14. Verificar conflitos nos arquivos listados e então dar o commit no merge

  ```
	git add .
	git commit -m "implementação da característica tal"
	git push
  ```

-----------------------------------------------------------

  ```
  git remote add origin  https://github.com/alitecsolucoes/vue2-webpack4-tailwind-firebase-alijunior.git

  git config --global user.email "alitecsolucoes@gmail.com"

  git config --global user.name "ALITEC Soluções"
  ```

-----------------------------------------------------------

  ```
  git init
  git add .
  git commit -m "Versão Inicial"
  git remote add origin https://github.com/alitecsolucoes/vue2-webpack4-tailwind-firebase-alijunior.git
  git remote -v
  git push -u origin master
  ```
